import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
      flex: 0,
      flexDirection: "row",
      borderTopColor: "rgb(139,174,253)",
      borderTopWidth: 1
   },
   termTitle: {
      fontSize: 17,
      textAlign: "center",
      paddingVertical: 7
   },
   courseName: {
      flex: 53,
      borderRightColor: "rgb(139,174,253)",
      borderRightWidth: 1,
      justifyContent: "center",
      paddingVertical: 5,
      paddingHorizontal: 8,
      overflow: "hidden"
   },
   coursePoint: {
      flex: 1,
      justifyContent: "center",
      borderRightColor: "rgb(139,174,253)",
      borderRightWidth: 1,
      padding: 4
   },
   averageRow: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 5,
      paddingHorizontal: 8,
      borderTopColor: "rgb(139,174,253)",
      borderTopWidth: 1
   },
   pointTable: {
      borderWidth: 2,
      borderColor: 'rgb(139,174,253)',
      borderRadius: 10,
      overflow: 'hidden'
   },
   courseNameCellTableTitle: {
      flex: 53,
      backgroundColor: "rgb(139,174,253)",
      borderRightColor: "white",
      borderRightWidth: 1,
      paddingVertical: 5,
      paddingHorizontal: 8,
      overflow: 'hidden'
   },
   pointCellTableTitle: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "rgb(139,174,253)",
      borderRightColor: "white",
      borderRightWidth: 1,
      padding: 4
   }
});

module.exports = styles;
