import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Platform,
  StatusBar
} from "react-native";
import { userService } from "../../services";

class Login extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isLogin: null,
      user: {
        studentId: "",
        password: ""
      }
    };
  }

  _signInAsync = async () => {
    const user = this.state.user;

    const response = await userService.login(user);

    if (response.isLogin) {
      this.setState({ isLogin: true });
      await AsyncStorage.setItem("isLogin", "true");
      await AsyncStorage.setItem("studentId", this.state.user.studentId);

      const data = await userService.loadData(user);
      this.props.navigation.navigate("App");
      return;
    }

    this.setState({ isLogin: false });
  };

  render() {
    return (
      <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        {this.state.isLogin ? (
          <View
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              height: "100%",
              width: "100%",
              position: "absolute",
              zIndex: 100
            }}
          >
            <Text>Loading Data...</Text>
          </View>
        ) : (
          <View></View>
        )}
        <View style={{ flex: 30 }}>
          <ImageBackground
            source={require("../../../assets/images/bg-login.jpg")}
            style={{ flex: 1 }}
          />
        </View>

        <View style={styles.loginContent}>
          <View style={{ flex: 1, marginTop: 35, alignItems: "center" }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 35,
                fontWeight: "bold",
                color: "#575b47"
              }}
            >
              Xin Chào!
            </Text>
            <Text
              style={{ textAlign: "center", color: "#bebebe", fontSize: 20 }}
            >
              Vui lòng đăng nhập để tiếp tục
            </Text>
            <View style={{ width: "80%", marginVertical: 20 }}>
              <View>
                <Text style={{ fontSize: 20, color: "#c8747e" }}>
                  Đăng nhập thất bại
                </Text>
              </View>
              <TextInput
                style={styles.textInput}
                placeholder="MSSV"
                placeholderTextColor="#b3b3b3"
                onChangeText={studentId =>
                  this.setState({ user: { ...this.state.user, studentId } })
                }
              />

              <TextInput
                style={styles.textInput}
                placeholder="Mật Khẩu"
                placeholderTextColor="#b3b3b3"
                onChangeText={password =>
                  this.setState({ user: { ...this.state.user, password } })
                }
              />

              <TouchableOpacity
                style={styles.loginButton}
                activeOpacity={0.9}
                onPress={() => {
                  this._signInAsync();
                }}
              >
                <Text style={styles.textButton}>Đăng Nhập</Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{ textAlign: "center", color: "#b3b3b3", fontSize: 18 }}
            >
              Bằng cách chấp nhận đăng nhập bạn đã chấp nhận với
              <Text style={{ color: "#8baefd", marginHorizontal: 5 }}>
                {" "}
                Điều Khoản{" "}
              </Text>
              của chúng tối!
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginContent: {
    flex: 70,
    marginTop: -25,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  textInput: {
    fontSize: 20,
    backgroundColor: "#f1f1f1",
    margin: 10,
    borderRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 10
  },
  loginButton: {
    backgroundColor: "#8baefd",
    marginHorizontal: 10,
    marginTop: 15,
    paddingVertical: 10,
    borderRadius: 30
  },
  textButton: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center"
  }
});

export default Login;
