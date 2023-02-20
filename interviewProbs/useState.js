//Q1 Write a code to Handle multiple input tags with a single function //

const [counter, setCounter] = useState("");
const [moreStuff, setMoreStuff] = useState("");

const setCount = () => {
    setCounter(counter+1);
}

//Q1 Write a code to Handle multiple input tags with a single function //

const initState = {
    name: "",
    email: "",
    password: ""
}

function App()  {
    const [state, setState] = React.useState(initState);

    const handleChange = e => {
        const {name, value} = e.target;
        setState({...state, [name]: value})
    }
    return (
        <div>
            <div>
                <input type = "text" placeholder = "name" value = {state.name} onChange = {handleChange}/>
            </div>
            <div>
                <input type = "text" placeholder="email" value = {state.email} onChange = {handleChange}/>
            </div>
            <div>
                <input type = "password" placeholder = "password" value = {state.password} onChange = {handleChange}/>
            </div>
            
        </div>
    )
}