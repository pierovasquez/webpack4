import '../css/index.css';
import text from './text';

console.log('multi home');

text();

if (module.hot) {
    module.hot.accept('./text.js', function() {
        console.log('recargado en hot mode');
        text();
    })
}