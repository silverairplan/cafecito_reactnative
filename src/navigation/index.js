import React,{useEffect, useRef} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native';
import {FirstScreen,Login,Signup,Forgot,Permission,Home,Podcasts,LiveStreams,Influencers,Videos,Shops,Chat,MyProfile,Notifications,Help,Condition,ContactUs,PodCastDetail,ChatRoom,VideoView,ShopDetail,Episode,Request,InfluenceProfile,Camera,Chating,VideoCall,AudioCall,MyProfileView,MyProfileEdit,PaymentMethod,AddCard,Account,UpdateEmail,Password,PaymentHistory,MyRequest, Payment,Cart,UploadDocument,Map,Pricing, AddLiveStream,Review,MyVideo, InfluencerRequest, MyProfileInfluencer, InfluencerEdit, MyReviews,EditShop, AddProduct,AddFeed,InfluencerReview} from '../screens'
import {useSelector,useDispatch} from 'react-redux'
import {initvideocall,destroyvideocall,initaudiocall} from './videocall'
import seterror from '../redux/action/error'
import AlertComponent from '../component/AlertComponent'
import notificationinit from '../utils/notificationconfig'
const Stack = createStackNavigator()


export default function Navigation(props)
{
    const ref = useRef(null)
    const dispatch = useDispatch()
    const {userinfo,token} = useSelector(state=>state.auth)
    const error = useSelector(state=>state.error)

    useEffect(()=>{
        if(token)
        {
            initvideocall(dispatch,userinfo.id,ref)
            notificationinit(token)
        }
        else
        {
            destroyvideocall()
        }

        return () => {
            destroyvideocall()
        }
    },[token])
    return (
        <>
        <NavigationContainer ref={ref}>
            <Stack.Navigator>
                <Stack.Screen
                    name="FirstScreen"
                    component={FirstScreen}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Pricing"
                    component={Pricing}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Upload"
                    component={UploadDocument}
                    options={{header:()=>null}}/>
                <Stack.Screen
                    name="Forgot"
                    component={Forgot}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Permission"
                    component={Permission}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Podcasts"
                    component={Podcasts}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="PodcastDetail"
                    component={PodCastDetail}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="LiveStreams"
                    component={LiveStreams}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="AddLiveStream"
                    component={AddLiveStream}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Influencers"
                    component={Influencers}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="InfluencerReview"
                    component={InfluencerReview}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Videos"
                    component={Videos}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="MyVideo"
                    component={MyVideo}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Shops"
                    component={Shops}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="EditShop"
                    component={EditShop}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="AddFeed"
                    component={AddFeed}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="AddProduct"
                    component={AddProduct}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Chat"
                    component={Chat}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="MyProfile"
                    component={MyProfile}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="MyProfileInfluencer"
                    component={MyProfileInfluencer}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Notifications"
                    component={Notifications}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Help"
                    component={Help}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Condition"
                    component={Condition}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="ContactUs"
                    component={ContactUs}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="ChatRoom"
                    component={ChatRoom}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="VideoView"
                    component={VideoView}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="ShopDetail"
                    component={ShopDetail}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Episode"
                    component={Episode}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Request"
                    component={Request}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="InfluenceProfile"
                    component={InfluenceProfile}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Camera"
                    component={Camera}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Chating"
                    component={Chating}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="VideoCall"
                    component={VideoCall}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="AudioCall"
                    component={AudioCall}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="MyProfileView"
                    component={MyProfileView}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="MyProfileEdit"
                    component={MyProfileEdit}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="InfluencerEdit"
                    component={InfluencerEdit}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="PaymentMethod"
                    component={PaymentMethod}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="AddCard"
                    component={AddCard}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Account"
                    component={Account}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Email"
                    component={UpdateEmail}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Password"
                    component={Password}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="PaymentHistory"
                    component={PaymentHistory}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="MyRequest"
                    component={MyRequest}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="MyReviews"
                    component={MyReviews}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="InfluencerRequest"
                    component={InfluencerRequest}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Payment"
                    component={Payment}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Cart"
                    component={Cart}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="MapView"
                    component={Map}
                    options={{header:()=>null}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Review"
                    component={Review}
                    options={{header:()=>null}}
                ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
        <AlertComponent error={error} seterror={(err)=>dispatch(seterror(err))}></AlertComponent>
        </>
    )    
}