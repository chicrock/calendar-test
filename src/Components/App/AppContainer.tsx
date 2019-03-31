import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Agenda } from "react-native-calendars";

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

const vacation = { key: "vacation", color: "red", selectedDotColor: "blue" };
const massage = { key: "massage", color: "blue", selectedDotColor: "blue" };
const workout = { key: "workout", color: "green" };
const aaaa = { key: "aaaa", color: "grey" };

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
        <Agenda
          // Specify style for calendar container element. Default = {}
          style={{
            borderWidth: 1,
            borderColor: "gray",
            height,
            width,
          }}
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          hideArrows={true}
          theme={{}}
          items={{
            "2019-03-31": [{ text: "item 1 - any js object" }],
            "2019-03-13": [{ text: "item 2 - any js object" }],
            "2019-03-20": [
              { text: "item 3 - any js object" },
              { text: "any js object" },
            ],
            "2019-02-26": [],
          }}
          markedDates={{
            "2019-03-16": {
              dots: [vacation, massage, workout, aaaa],
            },
            "2019-03-17": { marked: true },
            "2019-03-18": { disabled: true },
          }}
          markingType={"multi-dot"}
          // specify your item comparison function for increased performance
          rowHasChanged={(r1, r2) => {
            return r1.text !== r2.text;
          }}
          // specify how each item should be rendered in agenda
          renderItem={(item, firstItemInDay) => {
            return <View />;
          }}
          // specify how each date should be rendered. day can be undefined if the item is not first in that day.
          renderDay={(day, item) => {
            return <View />;
          }}
          // specify how empty date content with no items should be rendered
          renderEmptyDate={() => {
            return <View />;
          }}
          // specify how agenda knob should look like
          // renderKnob={() => {
          //   return <View />;
          // }}
          // specify what should be rendered instead of ActivityIndicator
          renderEmptyData={() => {
            return <View />;
          }}
        />
      </View>
    );
  }
}

export default AppContainer;
