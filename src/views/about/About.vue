<template>
  <v-container class="py-10 px-10">
    <div class="row">
      <div class="col-12 col-md-6">
        <v-subheader>作者相关</v-subheader>
        <v-card class="mx-4">
          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">DSRKafuU</v-list-item-title>
              <v-list-item-subtitle>console.log(`amzrk2`);</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="info">Read</v-btn>
            <v-btn text color="info">Bookmark</v-btn>
          </v-card-actions>
        </v-card>

        <v-subheader class="mt-5">版权声明</v-subheader>
      </div>
      <div class="col-12 col-md-6">
        <v-subheader>开源许可</v-subheader>
        <v-expansion-panels accordion class="mx-4">
          <v-expansion-panel>
            <v-expansion-panel-header>Item</v-expansion-panel-header>
            <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'About',
};
</script>