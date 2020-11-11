import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import AppText from "./AppText";

const ListItem = ({
  title,
  image,
  subTitle,
  onPress,
  renderRightActions,
  IconComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableNativeFeedback>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.mediumGrey,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
});
