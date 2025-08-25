import { Stack , useRouter} from "expo-router";
import DataBaseConnection from "@/DataBase/dataBaseConnection";
import { useEffect } from "react";

function RouteGuard({children}){
  const router=useRouter();
  const databaseConnection=new DataBaseConnection();
  useEffect(() => {
    (async () => {
      const count = await databaseConnection.howManyApiKeys();
      if (count === 0) router.replace("/addFirstYTApi");
    })();
  }, [])
  return <>{children}</>
}

export default function RootLayout() {
  return (
    // <RouteGuard>
    // <Stack>
    //   <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    // </Stack>
    // </RouteGuard>

    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    </Stack>
  );
}
