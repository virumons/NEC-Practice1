import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  background-color: #2563EB;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

export const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  width: 250px;
  margin: 10px;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

export const Price = styled.p`
  color: #4F46E5;
  font-size: 16px;
`;

export const Description = styled.p`
  font-size: 14px;
`;
