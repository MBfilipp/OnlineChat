var myModule = require('./module');
var io = myModule.io;
let socket = io.connect();

class Message extends React.Components {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    render() {
        return (
            <form id="messForm">
			    <label for="name">Имя</label>
			    <input type="text" name="name" id="name" placeholder="Введите имя" class="form-control"></input>
			    <br></br>
			    <label for="message">Сообщение</label>
			    <textarea name="message" id="message" class="form-control" placeholder="Введите сообщение"></textarea>
			    <br></br>
			    <input type="submit" value="Отправить" class="btn btn-danger"></input>
		    </form>      
        );
    }
}
ReactDOM.render(
    <Message />,
    document.getElementById("all_mess")
);