import {
  FormInput,
  FormSection,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from "enmity/components";
import { SettingsStore } from "enmity/api/settings";
import { Linking, React } from "enmity/metro/common";
import { getActivity } from "../activity";
import { hasKey } from "../activity";

interface SettingsProps {
  settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {
  React.useEffect(
    () => () => {
      if (hasKey()) {
        getActivity();
      } else {
        getActivity();
      }
    },
    []
  );

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView>
        <FormSection title="Config">
          <FormInput
            placeholder="Last.fm"
            value={settings.get("name")}
            title="Name of presence"
            onChangeText={(text: string) => settings.set("name", text)}
          />
          <FormInput
            placeholder="abc123"
            value={settings.get("key")}
            title="Last.fm API Key"
            onChangeText={(text: string) => settings.set("key", text)}
          />
          <FormInput
            placeholder="printedwaste"
            value={settings.get("user")}
            title="Last.fm Username"
            onChangeText={(text: string) => settings.set("user", text)}
          />
        </FormSection>
        <View style={{ marginBottom: 50 }} />
        <View style={{flexDirection: "column"}}>
          <Text style={{ textAlign: "center", color: "#fff", fontSize: 12 }}>
            Created by
            <Text
              style={{ color: "#7289da" }}
              onPress={() => Linking.openURL("https://printedwaste.com")}
            >
              {" "}Kief
            </Text>
          </Text>
          <Text style={{ textAlign: "center", color: "#fff", fontSize: 12, marginTop: 10 }}>
            Get a Last.fm API key
            <Text
              style={{ color: "#7289da" }}
              onPress={() => Linking.openURL("https://www.last.fm/api/account/create")}
            >
              {" "}here
            </Text>
          </Text>
        </View>
        <View style={{ marginBottom: 50 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
