import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

export function LogisticFunction() {
  return (
    <>
      <div>
        <TeX
          className='text-xl'
          math={`p(r) = \\frac{1}{1+2.71828^{-5*( ( K * 0.5 ) + 0.1) - 1.29} }`}
        />            
      </div>
    </>
  )
}