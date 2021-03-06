import React,{useRef,useState} from 'react'
import {View,StyleSheet,ImageBackground,TouchableOpacity,Text,Image,ScrollView,FlatList,TextInput} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ScalingDrawer from 'react-native-scaling-drawer'
import {RFValue} from 'react-native-responsive-fontsize'
import Feather from 'react-native-vector-icons/Feather'
import ImagePicker from 'react-native-image-crop-picker'
import {addproduct} from '../service/productservice'
import {useSelector,useDispatch} from 'react-redux'
import {setproduct} from '../redux/action/product'
import AlertComponent from '../component/AlertComponent'
import {getproducts} from '../service/productservice'
export default function AddProduct({navigation})
{
    const dispatch = useDispatch()
    const {token} = useSelector(state=>state.auth)
    const [state,setstate] = useState({
        title:"",
        price:0,
        description:"",
        image:false
    })

    const [loading,setloading] = useState(false)

    const [error,seterror] = useState("")

    const imagepicker = () => {
        ImagePicker.openPicker({}).then(image=>{
            setstate(
                {
                    ...state,
                    image:{
                        uri:image.path,
                        type:image.mime,
                        name:image.path.split('/').pop()
                    }
                })
        }).catch(err=>console.log(err))
    }

    const validate = () => {
        for(let item in state)
        {
            if(!state[item])
            {
                seterror("All Field has to be filled")
                return false;
            }
        }

        return true;
    }

    const createproduct = () => {
        
        if(validate())
        {
            addproduct(state,token).then(res=>{
                if(res.data.success)
                {
                    getproducts(token).then(product=>{
                        if(product.data.success)
                        {
                            dispatch(setproduct(product.data.product))
                        }
                        navigation.navigate('EditShop',{product:res.data.product})
                    })
                    
                }
            }).catch(err=>console.log(err.response.data))   
        }
    }   

    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Feather name="arrow-left" color="white" size={RFValue(25,580)}></Feather>
                </TouchableOpacity>
                <Text style={style.title}>Add Product</Text>
                <TouchableOpacity style={style.righticon}>
                    
                </TouchableOpacity>
            </View>
            <ScrollView style={style.content} showsVerticalScrollIndicator={false}>
                {
                    state.image ? (
                        <TouchableOpacity onPress={imagepicker}>
                            <Image source={{uri:state.image.uri}} style={{height:wp('53.6'),borderRadius:29}} resizeMode="contain"></Image>
                        </TouchableOpacity>
                    ):(
                        <View style={style.uploadcontainer}>
                            <Feather name="image" color="#F6AA11" size={RFValue(40,580)}></Feather>
                            <TouchableOpacity style={style.upload} onPress={imagepicker}>
                                <Text style={style.uploadtxt}>Add Image</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
                
                <Text style={[style.label,{marginTop:24}]}>Product Name</Text>
                <View style={style.inputcontainer}>
                    <TextInput style={style.input} onChangeText={value=>setstate({...state,title:value})} value={state.title}></TextInput>
                </View>
                <Text style={style.label}>Price</Text>
                <View style={style.inputcontainer}>
                    <TextInput style={style.input} keyboardType="number-pad" onChangeText={value=>setstate({...state,price:value})} value={state.price}></TextInput>
                </View>
                <Text style={style.label}>Description</Text>
                <View style={style.inputcontainer}>
                    <TextInput style={style.input} numberOfLines={8} onChangeText={value=>setstate({...state,description:value})} value={state.value} multiline={true}></TextInput>
                </View>
            </ScrollView>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:15}}>
                <TouchableOpacity style={[style.btn,{backgroundColor:'#F6AA11'}]} onPress={createproduct}>
                    <Text style={style.btntext}>Post</Text>
                </TouchableOpacity>
            </View>

            <AlertComponent error={error} seterror={seterror}></AlertComponent>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#101010',
        padding:24
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    righticon:{
        width:wp('9%'),
        height:wp('9%'),
        borderRadius:wp('5%'),
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:RFValue(18,580),
        color:'#D5D5D5',
        fontFamily:'Quicksand-Medium'
    },
    content:{
        flex:1,
        marginTop:15,
        marginBottom:15
    },
    label:{
        fontSize:RFValue(12,580),
        color:'white',
        fontFamily:'Quicksand-Medium',
        marginTop:15
    },
    uploadcontainer:{
        backgroundColor:'#252525',
        borderRadius:29,
        alignItems:'center',
        padding:15,
        marginTop:5,
        height:wp('53.6'),
        justifyContent:'center'
    },
    upload:{
        width:wp('23.67'),
        padding:7,
        alignItems:'center',
        marginTop:15,
        borderRadius:17,
        borderColor:'#F6AA11',
        borderWidth:1
    },
    uploadtxt:{
        color:'#F6AA11',
        fontSize:RFValue(12,580),
        fontFamily:'Quicksand-Medium'
    },
    input:{
        fontSize:RFValue(15,580),
        borderWidth:0,
        textAlign:'center',
        color:'white'
    },
    btn:{
        marginRight:15,
        flex:1,
        paddingTop:15,
        paddingBottom:15,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:32
    },
    btntext:{
        color:'white',
        fontSize:RFValue(16,580),
        fontFamily:'Montserrat-Medium'
    },
    inputcontainer:{
        display:'flex',
        flexDirection:'row',
        paddingLeft:25,
        paddingRight:25,
        backgroundColor:'#252525',
        borderRadius:27,
        alignItems:'center',
        shadowColor:'black',
        shadowOpacity:0.16,
        shadowOffset:{
            height:3,
            width:0
        },
        shadowRadius:5,
        marginTop:5
    },
    input:{
        color:'white',
        fontSize:RFValue(18,580),
        fontFamily:'Quicksand-Medium',
        flex:1
    }
})