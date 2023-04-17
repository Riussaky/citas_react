
// SINTAXYS NUMERO 2 UTILIZANDO CHILDREN
const Error = ({children}) => {
    return (
        <div className="bg-red-600 text-white font-bold text-center uppercase rounded-xl p-3 mb-3">{children}
    </div>
  )
}

export default Error


// SINTAXYS NUMERO 1 UTILIZANDO PROPS
// const Error = ({mensaje}) => {
//     return (
//         <div>
//         <p className="bg-red-600 text-white font-bold text-center uppercase rounded-xl p-3 mb-3">{mensaje}</p>
//     </div>
//   )
// }

// export default Error
