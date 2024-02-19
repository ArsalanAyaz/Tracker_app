"use client"
import ExpenseForm from "@/components/ExpenseForm";
import React , {useState} from "react";

export type Expense ={

  id : number,
  description : string,
  amount : number,
}

export default function Home() {

  const [expenses , setexpenses] = useState<Expense[]>([]);

  const addExpense = (expense : Expense) => {

    setexpenses((prevExpenses) => [...prevExpenses , expense])
    console.log(expenses)
  }

  return (
   
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center pb-4 text-gray-500">
        EXPENSE TRACKER
      </h1>
      <ExpenseForm onAddExpense={addExpense}/>
    </div>
      
  );
}
