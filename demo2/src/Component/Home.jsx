import style from "./Home.module.css";

function Home (){
    let students =[
        {
            img:"https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?t=st=1744220395~exp=1744223995~hmac=1e1354baaec35eb6489efe2c872422f03a5e190bd0b61038573abce554e84a85&w=1380",
            name:"Name : Rahul",
            phone:"phone: 9856472354",
            age:"age: 23"
        },
        {
            img:"https://img.freepik.com/premium-photo/pretty-indian-asian-college-girl-using-holding-laptop-computer-with-bag-standing-isolated-white-background_466689-18284.jpg?w=740",
            name:"Name : Anita",
            phone:"phone: 8463254879",
            age:"age: 23"
        },
        {
            img:"https://img.freepik.com/premium-photo/cute-little-indian-indian-asian-school-boy-wearing-uniform_54391-1877.jpg?w=740",
            name:"Name : Suraj",
            phone:"phone: 9823456715",
            age:"age: 23"
        },
    ];
    return (
        <>
        <div className={style.parent}>
            {students.map((card)=>{
                return(
                    <div className={style.card}>
                        <img src={card.img} alt="" />
                        <div className={style.text}>
                        <h3>{card.name}</h3>
                        <p><h3>{card.phone}</h3></p>
                        <h3>{card.age}</h3>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )

}
export default Home;