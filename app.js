

function main(){
    let today = new Date().toISOString().slice(0, 10)
    const startDate  = '2022-04-15';
    const endDate    = today;
    
    const Months   = new Date(endDate) - new Date(startDate)
    const Days = Months / (1000 * 60 * 60 * 24);
    const weeks = Days /7;
    var news="Washuj, we are now at week: ";
    alert(news + weeks);
}
main()
