import {
    Accordion,
    Container,
    Group,
    Image,
    Paper,
    Stack,
    Text,
    Title,
} from '@mantine/core';
import Seo from 'shared/components/Seo';
import BackgroundPatternDesktop from 'assets/images/background-pattern-desktop.svg';
import BackgroundPatternMobile from 'assets/images/background-pattern-mobile.svg';
import IconMinus from 'assets/images/icon-minus.svg';
import IconPlus from 'assets/images/icon-plus.svg';
import IconStar from 'assets/images/icon-star.svg';
import { faqData } from 'pages/Home/data/faq.data';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';

const Home = () => {
    const [value, setValue] = useState<string | null>(null);
    const isMobile = useMediaQuery(`(min-width: 375px`);

    return (
        <>
            <Seo title={'Hello World'} />
            <Container
                fluid
                p={0}
                style={{
                    position: 'relative',
                }}
            >
                <Image
                    src={
                        !isMobile
                            ? BackgroundPatternMobile
                            : BackgroundPatternDesktop
                    }
                    className="h-52 absolute top-0 z-0"
                />
                <Stack className="h-full z-30">
                    <Group justify="center" className="w-full absolute top-24">
                        <Paper w={500} m={'md'} shadow="xl" radius="lg" p="xl">
                            <Group>
                                <Image src={IconStar} h={28} />
                                <Title order={1} size={36} c={'dark-purple'}>
                                    FAQs
                                </Title>
                            </Group>
                            <Accordion
                                mt={'lg'}
                                onChange={setValue}
                                chevronSize={24}
                            >
                                {faqData.map((item) => (
                                    <Accordion.Item
                                        key={item.value}
                                        value={item.value}
                                    >
                                        <Accordion.Control
                                            chevron={
                                                value === item.value ? (
                                                    <Image src={IconMinus} />
                                                ) : (
                                                    <Image src={IconPlus} />
                                                )
                                            }
                                            className="hover:bg-white"
                                        >
                                            <Text
                                                fw={700}
                                                fz={16}
                                                className="text-dark-purple hover:text-purple hover:font-bold"
                                            >
                                                {item.value}
                                            </Text>
                                        </Accordion.Control>
                                        <Accordion.Panel
                                            styles={{
                                                content: {
                                                    color: '#8c6991',
                                                    fontSize: 14,
                                                    paddingTop: 16,
                                                    paddingBottom: 16,
                                                },
                                            }}
                                        >
                                            {item.description}
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Paper>
                    </Group>
                </Stack>
            </Container>
        </>
    );
};

export default Home;
