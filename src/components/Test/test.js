import './Test.css';

const Test = ({type, style}) => {
  return (
    <span className='test-span' style={{style}}>
      {type}
    </span>    
  );
}

export default Test;
