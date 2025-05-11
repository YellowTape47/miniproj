import CardItem from "@/component/CardItem";
import CategoryBadges from "@/component/CategoryBadges";
import product from "@/data/products";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
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
      {/* <View style={{ alignItems: "center" }}></View> */}
      <ScrollView>
        <CardItem
          image={product[0].image}
          title={product[0].title}
          price={product[0].price}
          category={product[0].category}
        />
        <CardItem
          image={product[0].image}
          title={product[0].title}
          price={product[0].price}
          category={product[0].category}
        />
        <CardItem
          image={product[0].image}
          title={product[0].title}
          price={product[0].price}
          category={product[0].category}
        />
        <CardItem
          image={product[0].image}
          title={product[0].title}
          price={product[0].price}
          category={product[0].category}
        />
        <CardItem
          image={product[0].image}
          title={product[0].title}
          price={product[0].price}
          category={product[0].category}
        />
      </ScrollView>
    </View>
  );
}
