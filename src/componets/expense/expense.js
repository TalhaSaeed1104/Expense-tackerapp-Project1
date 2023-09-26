import './expense.css';
import {useForm} from 'react-hook-form';
import { useDispatch ,useSelector } from 'react-redux';

export function Expense(){
    let dispatch = useDispatch();
    
    let {handleSubmit ,register} = useForm();    
    
    const onsave=(maradata)=>{

        console.log(maradata);

        dispatch({
            type :'Add-hogya',
            data : maradata
        })
    }
    let cake=useSelector(function(stro){
        return stro.adexpense
    })
    function getIncome(){
        let income = 0;
        {
            cake.daat.map(function(s){
                if(s.amout > 0){
                    income = income + +s.amout
                }
            })
        }
        return income;

    }
    function getexpence(){
        let expense = 0;
        {
            cake.daat.map(function(f){
                if(f.amout < 0){
                    expense +=  +f.amout
                }
            })
        }
        return expense;

    }
    let income = getIncome();
    let expence = Math.abs(getexpence());

    return (
        <div className="container">
            <h1 className='center'>Expense Tracker App <br /> By Muhammad Talha</h1>
            <h2 className='center'>Current Blance  ${income-expence}</h2>

            <div className="iner-text">
                <h3 className='text1'>INCOME <br />${income}</h3>

                <h3 className='text'>EXPENSE <br />${expence}</h3>
            </div>
            <h2 className='left'>History</h2>
            <hr />
            <ul>
            {
                cake.daat.map(function(a,myindex){
                    return <li>

                        <span>{a.desc}</span>
                        <span>{a.amout}</span>
                        <button id='del' onClick={function(){
                            dispatch({
                                type:'delete-hogya',
                                shop :myindex
                            })
                        }}>X</button>
                    </li>
                })
            }
                </ul>
            
            <h2 className='left'>Add new Transation</h2>

            <hr />

            <form onSubmit={handleSubmit(onsave)}>

                <label>
                    Enter Transation 
                    <br />
                    <input {...register('desc')} className='input' type="text"  required autoComplete='off' autoFocus/>
                </label>
                <br />
                <label>
                    Enter Amount 
                    <br />
                    <input {...register('amout')} className='input' type="number" required autoComplete='off'/>
                </label>
                <button class="button type1" type='submit'>
                    submit
                </button>
                
                
            </form>

        </div>
    )
}