import React, { Component } from "react";
import { View, Text } from "react-native";

import styles from './style';

class TablePoint extends Component {

   render() {

      let points = this.props.point ? this.props.point : [];

      const renderTerm = points.map((term, index) => {
         return (
            <View style={styles.container} key={index} >
               <View style={{ flex: 1 }} >
                  <View>
                     <Text style={styles.termTitle}>
                        Học kì {term.termId.charAt(0)} ({term.termId.slice(1, 5) + ' - ' + term.termId.slice(5, 9)})
                     </Text>
                     {
                        term.pointSubject.map((item, index) => {
                           return <View style={styles.container} key={index}>
                              <View style={styles.courseName} >
                                 <Text style={{ fontSize: 17 }}>{item.subjectName}</Text>
                              </View>

                              <View style={{ flex: 47, flexDirection: "row" }}>
                                 <View style={styles.coursePoint} >
                                    <Text style={{ textAlign: "center", fontSize: 16 }} >
                                       {item.processScore}
                                    </Text>
                                 </View>
                                 <View style={styles.coursePoint} >
                                    <Text style={{ textAlign: "center", fontSize: 16 }} >
                                       {item.midTermScore}
                                 </Text>
                                 </View>
                                 <View
                                 style={styles.coursePoint}
                                 >
                                    <Text style={{ textAlign: "center", fontSize: 16 }}>
                                       {item.practiceScore}
                                    </Text>
                                 </View>
                                 <View
                                 style={styles.coursePoint}
                                 >
                                    <Text style={{ textAlign: "center", fontSize: 16 }} >
                                       {item.endTermScore}
                                    </Text>
                                 </View>
                                 <View
                                    style={{
                                       flex: 1,
                                       padding: 4,
                                       justifyContent: "center",
                                       overflow: 'hidden'
                                    }}
                                 >
                                    <Text style={{ textAlign: "center", fontSize: 16 }} >
                                       {item.termScore}
                                    </Text>
                                 </View>
                              </View>
                           </View>
                        })
                     }
                     <View style={styles.averageRow}>
                        <Text style={{ fontSize: 17 }}>Trung bình</Text>
                        <Text style={{ fontSize: 17 }}>{ term.average }</Text>
                     </View>
                  </View>
            </View>
         </View>)
      });

      return (
         <View style={styles.pointTable}>
            <View style={{ flex: 0, flexDirection: "row" }}>
               <View style={styles.courseNameCellTableTitle} >
                  <Text style={{ color: "white", fontSize: 17 }}>Môn học</Text>
               </View>
               <View style={{ flex: 47, flexDirection: "row" }}>
                  <View style={styles.pointCellTableTitle} >
                     <Text style={{ textAlign: "center", color: "white", fontSize: 16 }}>QT</Text>
                  </View>
                  <View style={styles.pointCellTableTitle} >
                     <Text
                        style={{ textAlign: "center", color: "white", fontSize: 16 }}
                     >
                        GK
                     </Text>
                  </View>
                  <View style={styles.pointCellTableTitle} >
                     <Text
                        style={{ textAlign: "center", color: "white", fontSize: 16 }}
                     >
                        TH
                     </Text>
                  </View>
                  <View style={styles.pointCellTableTitle} >
                     <Text
                        style={{ textAlign: "center", color: "white", fontSize: 16 }}
                     >
                        CK
                     </Text>
                  </View>
                  <View
                     style={{
                        flex: 1,
                        backgroundColor: "rgb(139,174,253)",
                        padding: 4,
                        justifyContent: "center",
                        overflow: 'hidden'
                     }}
                  >
                     <Text
                        style={{ textAlign: "center", color: "white", fontSize: 16 }}
                     >
                        TB
                     </Text>
                  </View>
               </View>
            </View>
            
               {
                  renderTerm
               }
            
         </View>
      );
   }
}

export default TablePoint;
