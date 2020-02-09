import React from "react";
import MaskedInput from "react-text-mask";
import styles from '../styles';

const CepInput = props => {
  const onChange = e => {
    if (e.target.value.length === 9) {
      var cep = e.target.value;
      getData(cep);
    }
  };

  const getData = async cep => {
    try {
      const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const jsonResult = await result.json();
      props.onSuccess(jsonResult);
    } catch (error) {
      console.log({ error: error });
    }
  };

  return (
    <MaskedInput
      {...props}
      guide={false}
      mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
      type="text"
      placeholder={props.placeholder ? props.placeholder : "00000-000"}
      onChange={e => onChange(e)}
    />
  );
};

export default CepInput;