import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    text: {
        fontSize: 20,
        margin: 10,
      },
      result: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%',
        height: 300,
        backgroundColor: '#F5F5F5',
      },
      buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      button: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFF',
        minHeight: 80,
        minWidth: 80
      },
      textButton: {
        color: '#5B5B5B',
        fontSize: 25
      },
      resultText:{
          fontWeight: '100',
          fontSize: 80,
          margin: 10,
          alignSelf: 'flex-end'
      },
      historyText:{
          fontSize: 22,
          marginBottom: 0,
          marginRight: 10,
          alignSelf: 'flex-end'
      }
})