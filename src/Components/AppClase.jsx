export default class AppClase extends Component {
    constructor(props) {
      super(props);    
      this.state = {encendido: true};
    }
    
    manejarPulsacion = (event) => {
      this.setState((prevState, props) => ({       
        encendido: !prevState.encendido
      }));
    }
    
    render() {
      return(
        <div className="App">
          <header className="App-header">
            <button onClick={this.manejarPulsacion}>
              {this.state.encendido ? 'Activado' : 'Desactivado'}
            </button>
          </header>
        </div>
      );
    }
}