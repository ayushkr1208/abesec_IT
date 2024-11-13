import './marks.css';

const Marks = ({name, roll, m1, m2, m3}) => {
  return (
    <div id="mrk">
      <h1>Marksheet</h1>
      <h2>Name: {name}</h2>
      <h2>Roll No: {roll}</h2>
      <h2>Sem1: {m1}%</h2>
      <h2>Sem2: {m2}%</h2>
      <h2>Sem3: {m3}%</h2>
    </div>
  )
}

export default Marks;
