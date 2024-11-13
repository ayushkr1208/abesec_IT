import Marks from './marks';

const DisplayMarks = () => {
    const students =[{name: "Ayush Kumar", roll:879, m1:89, m2:78, m3:91, m4:90},
        {name: "Aman", roll:879, m1:89, m2:78, m3:91, m4:90},
        {name: "Ravi", roll:879, m1:89, m2:78, m3:91, m4:90},
        {name: "Kunal", roll:879, m1:89, m2:78, m3:91, m4:90},
        {name: "Rahul", roll:879, m1:89, m2:78, m3:91, m4:90}
    ];
  return (
    <div>
      {students.map((student,index)=>(<Marks key={index} name={student.name} roll={student.roll} m1={student.m1} m2={student.m2} m3={student.m3} m4={student.m4}/>))}
    </div>
  )
}

export default DisplayMarks;
