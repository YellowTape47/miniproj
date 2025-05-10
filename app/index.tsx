import CardList from "@/component/CardList";
import CategoryBadges from "@/component/CategoryBadges";
import {
  Button,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        margin: 20,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 24 }}>FS SHOP</Text>

      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            flexDirection: "row",
            // backgroundColor: "black",
          }}
        >
          <TouchableOpacity>
            <CategoryBadges badgeName="All" />
          </TouchableOpacity>
          <TouchableOpacity>
            <CategoryBadges badgeName="Footwear" />
          </TouchableOpacity>
          <TouchableOpacity>
            <CategoryBadges badgeName="Electronics" />
          </TouchableOpacity>
          <TouchableOpacity>
            <CategoryBadges badgeName="Clothing" />
          </TouchableOpacity>
          <TouchableOpacity>
            <CategoryBadges badgeName="Kitchen" />
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "white",
            height: 250,
            width: "100%",
            borderRadius: 10,
          }}
        >
          <Image
            source={{
              uri: "https://runkeeper.com/cms/wp-content/uploads/sites/4/2021/04/SS23_GEL-CUMULUS-25_Highlight_CHIASI0016_SH09_03_FINAL-640x341.jpg",
            }}
            style={{
              height: 100,
              width: "92%",
              alignSelf: "center",
              borderRadius: 10,
              marginTop: 10,
            }}
          />
          <Text
            style={{
              marginLeft: 20,
              marginTop: 15,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Running Shoes
          </Text>
          <Text style={{ marginLeft: 20, marginTop: 3, fontSize: 16 }}>
            Footwear
          </Text>
          <Text style={{ marginLeft: 20, marginTop: 3 }}>KWD 29.99</Text>
          <View
            style={{
              borderWidth: 1,
              alignSelf: "flex-start",
              // width: 110,
              borderRadius: 5,
              // height: 40,
              backgroundColor: "blue",
              borderColor: "blue",
              marginLeft: 20,
              marginTop: 5,
              flexDirection: "row",
              top: 5,
            }}
          >
            <Button title="Add to Cart" color={"white"} />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "red",
              // width: 110,
              alignSelf: "flex-start",
              borderRadius: 5,
              // height: 40,
              backgroundColor: "red",
              marginLeft: 140,
              top: -35,
            }}
          >
            <Button title="Add to Favorites" color={"white"} />
          </View>
        </View>
        <CardList />
      </View>
    </View>
  );
}
