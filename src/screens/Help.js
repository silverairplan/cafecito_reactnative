import React,{useState,useEffect} from 'react';
import {View,ImageBackground,StyleSheet,KeyboardAvoidingView,Image,TouchableOpacity,Text} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen' 
import Collapsible from 'react-native-collapsible'
import {getposts} from '../service/postservice'
import HTML from 'react-native-render-html'

export default function Help({navigation})
{
    const [collapsed,setcollapsed] = useState([])
    const [help,sethelp] = useState([])

    useEffect(()=>{
        getposts('help').then(res=>sethelp(res.data.post)).catch(err=>console.log(err))
    },[])

    const collapse = (id) => {
        let collapseitem = [...collapsed]
        if(collapseitem.indexOf(id) > -1)
        {
            collapseitem.splice(collapseitem.indexOf(id),1)
        }
        else
        {
            collapseitem.push(id)
        }

        setcollapsed(collapseitem)
    }

    const gettime = (time) => {
        var date = new Date(time)
        var now = new Date();


        if(now.getFullYear() - date.getFullYear() == 0)
        {
            if(now.getMonth() - date.getMonth() == 0)
            {
                if(now.getDate() - date.getDate() == 0)
                {
                    if(now.getHours() - date.getHours() == 0)
                    {
                        if(now.getMinutes() - date.getMinutes() == 0)
                        {
                            return (now.getSeconds() - date.getSeconds()) + " seconds ago";
                        }
                        else
                        {
                            return (now.getMinutes() - date.getMinutes()) + " minutes ago";
                        }
                    }
                    else
                    {
                        return (now.getHours() - date.getHours()) + " hours ago";    
                    }
                }
                else
                {
                    return (now.getDate() - date.getDate()) + " days ago";
                }
            }
            else
            {
                return (now.getMonth() - date.getMonth()) + " months ago"
            }
        }   
        else
        {
            return (now.getFullYear() - date.getFullYear()) + " years ago";
        }
    }

    return (
            <View style={style.container}>
                <View style={{marginBottom:24}}>
                    <View style={style.header}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Feather name="arrow-left" size={RFValue(25,580)} color='white'></Feather>
                        </TouchableOpacity>
                        <Text style={style.headertitle}>Help</Text>
                        <View style={{width:RFValue(25,580)}}></View>
                    </View>
                    <TouchableOpacity style={style.btncontainer}>
                        <AntDesign name="questioncircleo" color='white' size={wp('19.08')}></AntDesign>
                    </TouchableOpacity>
                    <View style={{marginTop:24,marginBottom:48}}>
                        {
                            help.map((item,index)=>(
                                <View style={style.inputcontainer} key={index}>
                                    <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                        <Text style={style.title}>{item.title}</Text>
                                        <TouchableOpacity onPress={()=>collapse(item.id)}>
                                            <AntDesign name={collapsed.indexOf(item.id) > -1?"right":"down"} color="#B1B1B1" size={RFValue(20,580)}></AntDesign>
                                        </TouchableOpacity>
                                    </View>
                                    <Collapsible collapsed={collapsed.indexOf(item.id) > -1}>
                                        <HTML source={{html:item.description}} tagsStyles={{p:style.content,a:style.link}}></HTML>
                                    </Collapsible>
                                </View>
                            ))
                        }
                        {/* <View style={style.inputcontainer}>
                            <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                <Text style={style.title}>Introduction</Text>
                                <TouchableOpacity onPress={()=>setcollapsed([!collapsed[0],collapsed[1]])}>
                                    <AntDesign name={collapsed[0]?"right":"down"} color="#B1B1B1" size={RFValue(20,580)}></AntDesign>
                                </TouchableOpacity>
                            </View>
                            <Collapsible collapsed={collapsed[0]}>
                                <Text style={style.content}>A Paragraph of text with on <Text style={style.link}>unassigned link</Text></Text>
                                <Text style={style.content}>A second row of text with a <Text style={style.link}>web link</Text></Text>
                            </Collapsible>
                        </View>
                        <View style={style.inputcontainer}>
                            <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                <Text style={style.title}>How To Use</Text>
                                <TouchableOpacity onPress={()=>setcollapsed([collapsed[0],!collapsed[1]])}>
                                    <AntDesign name={collapsed[1]?"right":"down"} color="#B1B1B1" size={RFValue(20,580)}></AntDesign>
                                </TouchableOpacity>
                            </View>
                            <Collapsible collapsed={collapsed[1]}>
                                <Text style={style.content}>A Paragraph of text with on <Text style={style.link}>unassigned link</Text></Text>
                                <Text style={style.content}>A second row of text with a <Text style={style.link}>web link</Text></Text>
                            </Collapsible>
                        </View> */}
                    </View>
                </View>
            </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        width:wp('100%'),
        height:hp('100%'),
        padding:24,
        backgroundColor:'#101010'
    },
    logo:{
        width:wp('25%'),
        height:wp('30%'),
        alignSelf:'center',
        marginTop:hp('4%')
    },
    header:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    headertitle:{
        fontSize:RFValue(18,580),
        fontFamily:'Quicksand-Medium',
        color:'white'
    },
    inputcontainer:{
        backgroundColor:'#252525',
        shadowColor:'black',
        shadowOpacity:0.16,
        shadowRadius:5,
        shadowOffset:{
            height:3,
            width:0
        },
        borderRadius:8,
        elevation:2,
        padding:15,
        marginBottom:16,
        marginLeft:10,
        marginRight:10
    },
    btncontainer:{
        marginTop:30,
        width:wp('39'),
        height:wp('39'),
        borderRadius:wp('20'),
        backgroundColor:'#F6AA11',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    title:{
        fontSize:RFValue(12,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    },
    link:{
        fontSize:RFValue(12,580),
        color:'#F6AA11',
        fontFamily:'Quicksand-Medium'
    },
    content:{
        color:'white',
        fontFamily:'Quicksand-Medium',
        fontSize:RFValue(12,580),
        alignItems:'center'
    }
})