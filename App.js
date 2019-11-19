import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class App extends Component{
  render(){
    return(
      <View style = {{flex: 1}}>
        <ScrollView style = {{flex: 1, backgroundColor: 'white'}}>
          {/* Search Bar */}
          <View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop:30}}>
            <View style={{position:'relative', flex: 1}}>
              <TextInput placeholder="What do you want to eat ?" style={{borderWidth:1, borderColor: '#e8e8e8', borderRadius: 25, fontSize: 13, paddingLeft: 40, paddingRight: 20, marginRight: 18, backgroundColor:'white'}}/>
              <Image source={require('./assets/icon/search.png')} style={{position: 'absolute',top:4, left:10, height: 20, width: 20}} />
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./assets/icon/promo.png')} style={{height: 20, width: 20}} />
            </View>
          </View>
          {/* Gopay */}
          <View style={{marginHorizontal:17, marginTop: 8}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB8', borderTopLeftRadius: 4, borderTopRightRadius: 4 ,padding: 14}}>
              <Image source={require('./assets/icon/gopay.png')} />
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>Rp50.000</Text>
            </View>
            <View style={{flexDirection: 'row', backgroundColor: '#2f65bd', paddingTop:20, paddingBottom: 14, borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}>
              <View style={{flex: 1, alignItems: 'center', justifyContent:'center' }}>
                <Image source={require('./assets/icon/pay.png')}/>
                <Text style={{fontSize: 13, color: 'white', fontWeight: 'bold', marginTop: 15}}> Pay</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent:'center' }}>
                <Image source={require('./assets/icon/nearby.png')}/>
                <Text style={{fontSize: 13, color: 'white', fontWeight: 'bold', marginTop: 15}}>Nearby</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent:'center' }}>
                <Image source={require('./assets/icon/topup.png')}/>
                <Text style={{fontSize: 13, color: 'white', fontWeight: 'bold', marginTop: 15}}> Top Up</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent:'center' }}>
                <Image source={require('./assets/icon/more.png')}/>
                <Text style={{fontSize: 13, color: 'white', fontWeight: 'bold', marginTop: 15}}> More</Text>
              </View>
            </View>
          </View>
          {/* Main Feature */}
          <View style={{flexDirection:'row', flexWrap: 'wrap', marginTop: 18}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 18}}>
              <View style={{width:'25%', alignItems: 'center'}}>
                <View style={{height: 58, width: 58, borderWidth:1, borderColor: '#EFEFEF', borderRadius: 19, alignItems: 'center', justifyContent:'center'}}>
                  <Image source={require('./assets/icon/go-ride.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight: 'bold', alignSelf: 'center', marginTop:6}}>GO-RIDE</Text>
              </View>  
              <View style={{width:'25%', alignItems: 'center'}}>
                <View style={{height: 58, width: 58, borderWidth:1, borderColor: '#EFEFEF', borderRadius: 19, alignItems: 'center', justifyContent:'center'}}>
                  <Image source={require('./assets/icon/go-car.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight: 'bold', alignSelf: 'center', marginTop:6}}>GO-CAR</Text>
              </View>  
              <View style={{width:'25%', alignItems: 'center'}}>
                <View style={{height: 58, width: 58, borderWidth:1, borderColor: '#EFEFEF', borderRadius: 19, alignItems: 'center', justifyContent:'center'}}>
                  <Image source={require('./assets/icon/go-bluebird.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight: 'bold', alignSelf: 'center', marginTop:6}}>GO-BLUEBIRD</Text>
              </View>  
              <View style={{width:'25%', alignItems: 'center'}}>
                <View style={{height: 58, width: 58, borderWidth:1, borderColor: '#EFEFEF', borderRadius: 19, alignItems: 'center', justifyContent:'center'}}>
                  <Image source={require('./assets/icon/go-send.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight: 'bold', alignSelf: 'center', marginTop:6}}>GO-SEND</Text>
              </View>  
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
              <View style={{width:'25%', alignItems: 'center'}}>
                <View style={{height: 58, width: 58, borderWidth:1, borderColor: '#EFEFEF', borderRadius: 19, alignItems: 'center', justifyContent:'center'}}>
                  <Image source={require('./assets/icon/go-deals.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight: 'bold', alignSelf: 'center', marginTop:6}}>GO-DEALS</Text>
              </View>  
              <View style={{width:'25%', alignItems: 'center'}}>
                <View style={{height: 58, width: 58, borderWidth:1, borderColor: '#EFEFEF', borderRadius: 19, alignItems: 'center', justifyContent:'center'}}>
                  <Image source={require('./assets/icon/go-pulsa.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight: 'bold', alignSelf: 'center', marginTop:6}}>GO-PULSA</Text>
              </View>  
              <View style={{width:'25%', alignItems: 'center'}}>
                <View style={{height: 58, width: 58, borderWidth:1, borderColor: '#EFEFEF', borderRadius: 19, alignItems: 'center', justifyContent:'center'}}>
                  <Image source={require('./assets/icon/go-food.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight: 'bold', alignSelf: 'center', marginTop:6}}>GO-FOOD</Text>
              </View>  
              <View style={{width:'25%', alignItems: 'center'}}>
                <View style={{height: 58, width: 58, borderWidth:1, borderColor: '#EFEFEF', borderRadius: 19, alignItems: 'center', justifyContent:'center'}}>
                  <Image source={require('./assets/icon/more.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight: 'bold', alignSelf: 'center', marginTop:6}}>MORE</Text>
              </View>  
            </View>
          </View>
          <View style={{backgroundColor:'#f2f2f4', height: 17, marginVertical: 20}}></View>
          {/* News Section */}
          <View style={{marginHorizontal:17}}>
            <View style={{position: 'relative'}}>
              <Image source={require('./assets/dummy/sepak-bola.jpg')} style={{height: 170, width: '100%', borderRadius: 7}} />
              <View style={{width: '100%', height: '100%', top:0, left:0, borderRadius: 7, position:'absolute', backgroundColor:'black', opacity: 0.3}}></View>
              <View  style={{height: 15, width: 55, position: 'absolute', top: 16, left:16}}>
                <Image source={require('./assets/logo/white.png')} style={{width:undefined, height:undefined, resizeMode: 'contain', flex: 1}} />
              </View>
            </View>
            <View style={{borderBottomWidth: 1, borderBottomColor: '#E8E9ED', paddingBottom: 20}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 16, color: '#1c1c1c'}}>GO-NEWS</Text>
              <Text style={{fontSize: 14,  color: '#7A7A7A', marginBottom: 11}}>Dimas Drajat selamatkan penalti, Timnas U-23 kalahkan Brunei</Text>
              <TouchableOpacity style={{paddingHorizontal:12, paddingVertical:11, alignSelf:'flex-end', backgroundColor: '#61A756', borderRadius:4}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white', }}>READ</Text>
              </TouchableOpacity>
              {/* <View style={{paddingHorizontal:12, paddingVertical:11, alignSelf:'flex-end'}}> */}
                {/* <Button title="READ" color="#61a756"  /> */}
              {/* </View> */}
            </View>
          </View>
          {/* Internal Information Section */}
          <View style={{padding: 17}}>
            <View  style={{height: 15, width: 55, position: 'absolute', top: 16, left:16}}>
              <Image source={require('./assets/logo/gojek.png')} style={{width:undefined, height:undefined, resizeMode: 'contain', flex: 1}} />
            </View>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C', marginTop: 15, marginBottom: 20}}>Complete your profile</Text>
            <View style={{flexDirection:'row', marginBottom:17}}>
              <View>
                <Image source={require('./assets/dummy/facebook-connect.png')}/>
              </View>
              <View style={{marginLeft:16, flex:1}}>
                <Text style={{fontSize:15, color: '#4A4A4A', fontWeight:'bold'}}>Connect with Facebook</Text>
                <Text style={{fontSize:15, color: '#4A4A4A', width:'70%'}}>Login faster without verification code</Text>
              </View>
            </View>
            <TouchableOpacity style={{paddingHorizontal:12, paddingVertical:11, alignSelf:'flex-end', backgroundColor: '#61A756', borderRadius:4}}>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white', }}>CONNECT</Text>
            </TouchableOpacity>
          </View>
          {/* Go-Food Banner Section */}
          <View  style={{padding:17}}>
            <View style={{position: 'relative'}}>
              <Image source={require('./assets/dummy/food-banner.jpg')} style={{height: 170, width: '100%', borderRadius: 7}} />
              <View style={{width: '100%', height: '100%', top:0, left:0, borderRadius: 7, position:'absolute', backgroundColor:'black', opacity: 0.2}}></View>
              <View  style={{height: 15, width: 55, position: 'absolute', top: 16, left:16}}>
                <Image source={require('./assets/logo/white.png')} style={{width:undefined, height:undefined, resizeMode: 'contain', flex: 1}} />
              </View>
              <View style={{position: 'absolute', bottom:0, left:0, width:'100%', flexDirection:'row', alignItems: 'center'}}>
                <View>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom:15}}>Free GO-FOOD voucher</Text>
                  <Text style={{fontSize: 12, fontWeight: '400', color: 'white', marginBottom: 10}}>Quick, before they run out!</Text>
                </View>
                <View>
                  <TouchableOpacity style={{paddingHorizontal:12, paddingVertical:11, alignSelf:'flex-end', backgroundColor: '#61A756', borderRadius:4, marginLeft: 10}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white', }}>GET VOUCHER</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        
        </ScrollView>

        {/* Bottom Navigator */}
        <View style={{
          height: 54,
          flexDirection: 'row',
          backgroundColor: 'white'
        }}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./assets/icon/home.png')}
            />
            <Text style={{color: '#545454', fontSize: 10, marginTop: 4}}>Home</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./assets/icon/order.png')}
            />
            <Text style={{color: '#545454', fontSize: 10, marginTop: 4}}>Orders</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./assets/icon/help.png')}
            />
            <Text style={{color: '#545454', fontSize: 10, marginTop: 4}}>Help</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./assets/icon/inbox.png')}
            />
            <Text style={{color: '#545454', fontSize: 10, marginTop: 4}}>Inbox</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./assets/icon/account.png')}
            />
            <Text style={{color: '#545454', fontSize: 10, marginTop: 4}}>Account</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({


});