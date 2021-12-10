import './About.page.scss';
import Context from '../../context';

export default function About() {
  
  return (
    <Context.Consumer>
      {context => (
        <div className="About">
          <h1>Todo sobre mi tienda</h1>
        </div>
      )}
    </Context.Consumer>
  );
}
