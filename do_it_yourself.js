#!/usr/bin/env node
import fs from "fs";
import { program } from "commander";

const DB = "todo.json";
const load = () => fs.existsSync(DB) ? JSON.parse(fs.readFileSync(DB)) : {id:1,tasks:[]};
const save = d => fs.writeFileSync(DB, JSON.stringify(d,null,2));

program
  .command("add <text>")
  .option("-p, --priority <n>", "priority", "3")
  .option("-d, --due <date>", "due date")
  .action((text,o)=>{
    let db=load();
    db.tasks.push({id:db.id++,text,priority:+o.priority,due:o.due||null,status:"pending"});
    save(db); console.log("Added:",text);
  });

program
  .command("list")
  .option("--status <s>")
  .action(o=>{
    let tasks=load().tasks;
    if(o.status) tasks=tasks.filter(t=>t.status===o.status);
    tasks.forEach(t=>console.log(`[${t.id}] ${t.status==="done"?"✓":"•"} ${t.text}`));
  });

program
  .command("done <id>")
  .action(id=>{
    let db=load(),t=db.tasks.find(x=>x.id==id);
    if(t){t.status="done";save(db);console.log("Done:",t.text);}
  });

program
  .command("del <id>")
  .action(id=>{
    let db=load(); db.tasks=db.tasks.filter(t=>t.id!=id);
    save(db); console.log("Deleted",id);
  });

program
  .command("clear")
  .action(()=>{
    let db=load(); db.tasks=db.tasks.filter(t=>t.status!=="done");
    save(db); console.log("Cleared done tasks");
  });

program.parse(process.argv);
