import {View,StyleSheet,Text} from 'react-native';
const Box =({colorName,hexCode}) =>{
  
    return(
        <View style={[{backgroundColor:hexCode, marginVertical:5 ,padding:10}]}>
            <Text style={{color:"white",textAlign:"center",fontWeight:"bold"}}>{colorName} {hexCode}</Text>
        </View>
    );
}
   const styles=StyleSheet.create({})
 
    export default Box;