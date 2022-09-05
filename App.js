import React, { useState } from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import Estilo from './src/components/Estilo'

export default function App() {
  const buttons = ['AC','DEL','%','/','7','8','9',
                  '*', '4', '5', '6', '-', '3', '2', 
                  '1', '+', '0', '.', '+/-', '=',]

  const [ currentNumber, setCurrentNumber ] = useState("")
  const [ lastNumber, setLastNumber ] = useState("")

  function handleInput(buttonPressed) {
    if(buttonPressed === "*" | buttonPressed === "/" | buttonPressed === "+" | buttonPressed === "-"){
      setCurrentNumber(currentNumber + " " + buttonPressed + " " )
      return
    }
    if(buttonPressed === "DEL"){
      console.log(currentNumber)
      setCurrentNumber(currentNumber.substring(0,(currentNumber.length - 1)))
      return
    }
    if(buttonPressed === "."){
      setCurrentNumber(currentNumber + buttonPressed)
      return
    }
    if(buttonPressed === "+/-"){
      return
    }
    if(buttonPressed === "AC"){
      setLastNumber("")
      setCurrentNumber("")
      return
    }
    if(buttonPressed === "="){
      setLastNumber(currentNumber + " =")
      calculator()
      return
    }
    setCurrentNumber(currentNumber + buttonPressed)
  }

  function calculator(){
    const splitNumbers = currentNumber.split(" ")
    const operator = splitNumbers[1]
    console.log(splitNumbers)
    if(operator === "*"){
      setCurrentNumber((parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[2])).toString())
    }
    if(operator === "/"){
      setCurrentNumber((parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[2])).toString())
    }
    if(operator === "+"){
      setCurrentNumber((parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[2])).toString())
    }
    if(operator === "-"){
      setCurrentNumber((parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[2])).toString())
    }
  }

  return (
    <SafeAreaView>
      <View style={Estilo.result}>
        <Text style={Estilo.historyText}>{lastNumber}</Text>
        <Text style={Estilo.resultText}>{currentNumber}</Text>
      </View>
      <View style={Estilo.buttons}>
        {buttons.map((button) => 
          <TouchableOpacity onPress={() => handleInput(button)} key={button} style={Estilo.button}>
            <Text style={Estilo.textButton}>
              {button}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  )
}

