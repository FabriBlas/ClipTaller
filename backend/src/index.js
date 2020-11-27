const app = require('./app');

function main(){
    const port = process.env.PORT || 5000;
    
    app.listen(port, () => console.log(`Server running on port ${port}`));
}

main();
