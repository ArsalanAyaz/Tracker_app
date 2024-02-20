"use client"
import ExpenseForm from "@/components/ExpenseForm";
import { ExpenseList } from "@/components/ExpenseList";
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
  
  }

  const deleteExpense = (id :number) => {

    setexpenses((prevExpenses) => 
      prevExpenses.filter((expense:Expense) => expense.id !== id)
    )

  }

  return (
   
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center pb-4 text-gray-500">
        EXPENSE TRACKER
      </h1>
      <ExpenseForm onAddExpense={addExpense}/>
      {expenses.length ? (
        <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
      ): null}
    </div>
      
  );
}
