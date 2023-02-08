import { ref } from "@vue/reactivity";

const ColorAssignment = () => {
  const colors = ["green", "red", "blue", "purple"];
  let message = ref("Pick a color...");
  const matchColor = (value) => {
    
    // To generate a random num between 1 and 3
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    // To check if the randomNumber === value
    if (colors[randomNumber] === value) {
      
      message.value = `You win... [answer: ${colors[randomNumber]}]`;
      return;
    }
    message.value = `You loose [answer: ${colors[randomNumber]}]`;
  };
  
  return { colors, message, matchColor };
};
export default ColorAssignment;