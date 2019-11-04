import React, { Component } from "react";
import { View, Text } from "react-native";

import styles from './style';

const data = [
   {
      term: {
         term: 'I',
         year: '2018 - 2019'
      },
      courses: [
         {
            name: 'Lập trình java',
            qt: 9,
            gk: 9,
            th: 9,
            ck: 9
         },
         {
            name: 'Lập trình java 1',
            qt: 9,
            gk: 9,
            th: 9,
            ck: 9
         },
         {
            name: 'Lập trình java 2',
            qt: 9,
            gk: 9,
            th: 9,
            ck: 9
         }
      ],
      dtb: 9
   },
   {
      term: {
         term: 'I',
         year: '2018 - 2029'
      },
      courses: [
         {
            name: 'Lập trình java',
            qt: 9,
            gk: 9,
            th: 9,
            ck: 9
         },
         {
            name: 'Lập trình java 1',
            qt: 9,
            gk: 9,
            th: 9,
            ck: 9
         },
         {
            name: 'Lập trình java 2',
            qt: 9,
            gk: 9,
            th: 9,
            ck: 9
         }
      ],
      dtb: 9
   }
]

class TablePoint extends Component {

   render() {

      const renderTerm = data.map((item, index) => {
         return (
            <View style={styles.container} key={index} >
               <View style={{ flex: 1 }} >
                  <View>
                     <Text style={styles.termTitle}>Học kì {item.term.term} ({item.term.year})</Text>
                     {
                        item.courses.map((item, index) => {
                           return <View style={styles.container} key={index}>
                              <View style={styles.courseName} >
                                 <Text style={{ fontSize: 17 }}>{item.name}</Text>
                              </View>

                              <View style={{ flex: 47, flexDirection: "row" }}>
                                 <View style={styles.coursePoint} >
                                    <Text style={{ textAlign: "center", fontSize: 16 }} >
                                       9
                                    </Text>
                                 </View>
                                 <View style={styles.coursePoint} >
                                    <Text style={{ textAlign: "center", fontSize: 16 }} >
                                       9
                                 </Text>
                                 </View>
                                 <View
                                 style={styles.coursePoint}
                                 >
                                    <Text style={{ textAlign: "center", fontSize: 16 }}>
                                       9
                                    </Text>
                                 </View>
                                 <View
                                 style={styles.coursePoint}
                                 >
                                    <Text style={{ textAlign: "center", fontSize: 16 }} >
                                       9
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
                                       9
                                    </Text>
                                 </View>
                              </View>
                           </View>
                        })
                     }
                     <View style={styles.averageRow}>
                        <Text style={{ fontSize: 17 }}>Trung bình</Text>
                        <Text style={{ fontSize: 17 }}>9</Text>
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
