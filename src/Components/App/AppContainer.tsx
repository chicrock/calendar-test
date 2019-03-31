import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Agenda, Calendar } from "react-native-calendars";

const { width, height } = Dimensions.get("window");

const styles: StyleSheet.NamedStyles<any> = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height,
    width,
  },
});

class AppContainer extends React.Component<any, any> {
  public constructor(props) {
    super(props);

    this.state = {
      userData: null,
    };
  }

  public render() {
    return (
      <View style={styles.container}>
        <Calendar // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={""}
          hideArrows={true}
          style={{ backgroundColor: "red" }}
          theme={{
            "stylesheet.calendar.header": {
              header: {
                height: 0,
              },
            },
          }}
        />
      </View>
    );
  }
}

export default AppContainer;
