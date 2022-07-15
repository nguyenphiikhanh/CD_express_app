import Express from "express";

const viewEngineConfig = (app) => {
    app.use(Express.static('./src/public'))
    app.set('view engine','ejs');
    app.set('views','./src/views');
}

export default viewEngineConfig;


// Branch feature/branch_result_compare_rebase (test commit 01)




// Branch feature/branch_result_compare_rebase (test commit 02)
