class Oven {
    constructor(capacity) {
        this.capacity = capacity;
        this.inUse = 0;
        this.queue = [];
    }

    async acquire() {
        if (this.inUse < this.capacity) {
            this.inUse++;
            return Promise.resolve();
        }
        return new Promise(resolve => this.queue.push(resolve));
    }

    release() {
        if (this.queue.length > 0) {
            const next = this.queue.shift();
            next(); // Let next chef in
        } else {
            this.inUse--;
        }
    }
}

async function chef(id, oven) {
    console.log(`Chef ${id} preparing ingredients...`);
    await new Promise(r => setTimeout(r, 1000)); // Prep work
    
    console.log(`Chef ${id} waiting for oven...`);
    await oven.acquire();
    
    console.log(`Chef ${id} cooking!`);
    await new Promise(r => setTimeout(r, 2000)); // Cooking
    
    console.log(`Chef ${id} done.`);
    oven.release();
}
