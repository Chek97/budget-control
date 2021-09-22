import React, { useEffect, useState } from 'react';
import { ControlAmount } from './components/ControlAmount';
import { Form } from './components/Form';
import { List } from './components/List';
import { QuestionForm } from './components/QuestionForm';

const App = () => {
  
  const [fullBudget, setFullBudget] = useState(0);
  const [remain, setRemain] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [bills, setBills] = useState([]);
  const [bill, setBill] = useState({});
  const [createBill, setCreateBill] = useState(false);
  
  useEffect(() => {
    if(createBill){
      setBills([...bills, bill]);
      setCreateBill(false);

      //restar el presupuesto
      const remainBill = remain - bill.amount;
      setRemain(remainBill);
    }
  }, [bill, bills, createBill, remain]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {
            showQuestion
            ?
            <QuestionForm fullBudgetSave={setFullBudget} remainSave={setRemain} show={setShowQuestion} />
            :
            <div className="row">
              <div className="one-half column">
                <Form addBill={setBill} setCreateBill={setCreateBill} />
              </div>
              <div className="one-half column">
                <List bills={bills} />

                <ControlAmount fullBudget={fullBudget} remain={remain} />
              </div>
            </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
