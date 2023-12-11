import Resume from '../../src/pdf/Resume.pdf'
// export default function Resume() {
//     return (
//         <div>
//             <p>Here is a link to my Resume!</p>
//             <iframe src={Resume} 
//             width='75%' height='1000rem'>
//             </iframe>
//         </div>
//     );
//   }
function Resume() {
  return (
    <section>
      <h1>Lisa Eimicke's Resume</h1>
      <p>
        <a href="../../src/pdf/Resume.pdf" target="_blank">
          Resume
        </a>
      </p>
    </section>
  );
}   
export default Resume;