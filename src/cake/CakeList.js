import Cake from "./Cake";


const CakeList = ({cakes}) => {

   const cakeComponents = cakes.map(cake => {
    return (<Cake cake= {cake} key={cake.id}/>)
   })  

   return(
    <section className = "CakeList">
        {cakeComponents}
    </section>
   )

}









export default CakeList;