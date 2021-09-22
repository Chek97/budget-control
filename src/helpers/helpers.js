export const reviewBudget = (budget, remain) => {
    let typeBudget;

    if((budget / 4) > remain){
        typeBudget = "alert alert-danger";
    }else if((budget / 2) > remain){
        typeBudget = "alert alert-warning";
    }else {
        typeBudget = "alert alert-success";
    }

    return typeBudget;
}