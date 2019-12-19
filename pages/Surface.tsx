import React from 'react';
import {
  Surface,
  Card,
  Text,
  Image,
  Button,
  Palette,
  Menu,
  IconButton,
} from './../src';
import {View, ScrollView} from 'react-native';

const SurfacePage = () => {
  // console.clear();
  return (
    <ScrollView>
      <Card elevation={4} margin={8}>
        <Card.Header
          // left={props => (
          //   <Avatar
          //     {...props}
          //     size={36}
          //     source={{
          //       uri:
          //         'data:image/jpeg;base64,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',
          //     }}
          //   />
          // )}
          right={() => (
            <Surface alignItems="center" padding={0}>
              <Text variant="caption" color={Palette.blue500} contrast={1}>
                Arkadaşsınız
              </Text>
              <Menu
                key={Math.random() * 200}
                minWidth={180}
                trigger={<IconButton icon="dots-vertical" />}
                render={({onDismiss}) => (
                  <>
                    <Button
                      type="drawer"
                      color="black"
                      icon="check-all"
                      onPress={onDismiss}>
                      item 1
                    </Button>
                    <Button
                      type="drawer"
                      color="black"
                      icon="check-all"
                      onPress={onDismiss}>
                      item 2
                    </Button>
                    <Button
                      type="drawer"
                      color="black"
                      icon="check-all"
                      onPress={onDismiss}>
                      item 3
                    </Button>
                  </>
                )}
              />
            </Surface>
          )}
          title="deneme"
          subtitle="deneme 1 2 3"
        />
        <Image
          source={{
            uri:
              'https://material.io/archive/guidelines/assets/0Bx4BSt6jniD7SUIwTFk3c21ndFU/style-imagery-principles4.png',
            // cache: 'only-if-cached',
          }}
        />
        <Card.Content>
          <Text variant="h5" transform="capitalize" gutterBottom={8}>
            deneme
          </Text>
          <Text variant="body2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            quasi ratione enim error neque iure? Eos inventore autem earum
            aliquid. Obcaecati autem doloribus sequi error expedita architecto
            rem fugit non!
          </Text>
        </Card.Content>
        <Card.Actions style={{justifyContent: 'flex-end'}}>
          <Button color={Palette.red500}>Kapat</Button>
          <Button color={Palette.blue500}>Tamam</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

export default SurfacePage;
/**
      <Surface
        padding={0}
        margin={[10, 16]}
        elevation={5}
        direction="column"
        justify="flex-start"
        alignContent="flex-start"
        alignItems="flex-start">
        <Image
          source={{
            uri:
              'https://material.io/archive/guidelines/assets/0Bx4BSt6jniD7SUIwTFk3c21ndFU/style-imagery-principles4.png',
            cache: 'only-if-cached',
          }}
        />
        <Surface
          padding={[16, 16]}
          direction="column"
          justify="flex-start"
          alignContent="flex-start"
          alignItems="flex-start"
          margin={0}>
          <Text variant="subtitle1" gutterBottom={8}>
            Deneme
          </Text>
          <Text variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            aliquam maiores rerum voluptatibus incidunt sed eum iusto deleniti
            tenetur! Nihil consequatur quidem nam rem illum sit accusantium
            blanditiis qui? Vitae?
          </Text>
        </Surface>
        <Surface
          padding={[0, 0]}
          margin={[8, 0]}
          direction="row"
          justify="flex-end"
          alignContent="flex-start"
          alignItems="flex-start">
          <Button dense icon="heart" color={Palette.red500}>
            Action 2
          </Button>
          <Button dense color={Palette.blue700}>
            <Icon
              name="comment"
              color={Palette.blue700}
              size={24}
              style={{marginRight: 8}}
            />
            <Text variant="button" color={Palette.blue700}>
              Action
            </Text>
          </Button>
        </Surface>
      </Surface> 
 
 */
