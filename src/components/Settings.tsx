import {
  Button,
  FormInput,
  FormRow,
  FormSection,
  FormSwitch,
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
        console.log("Setting activity on settings close");
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
        <Text style={{ textAlign: "center", color: "#fff", fontSize: 12 }}>
          Created by
          <Text
            style={{ color: "#7289da" }}
            onPress={() => Linking.openURL("https://printedwaste.com")}
          >
            Kief
          </Text>
        </Text>
        <View style={{ marginBottom: 50 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
