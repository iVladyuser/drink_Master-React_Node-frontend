import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Header } from 'components/Header/Header';
import DrinkPageHero from 'components/DrinkPage/DrinkPageHero';
import DrinkIngredientsList from 'components/DrinkPage/DrinkIngredientsList';
import RecipePreparation from 'components/DrinkPage/RecipePreparation';
import { Container } from './DrinkPage.styled';
import { selectDrinkById } from '../../redux/drink/selectors';
import { getDrinkById } from '../../redux/drink/operations';
import Footer from 'components/Footer/Footer';

// import { selectError, selectIsLoading } from 'redux/selectors';

const DrinkPage = () => {
  const dispatch = useDispatch();
  const { drinkId } = useParams();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const drink = useSelector(state => selectDrinkById(state));

  useEffect(() => {
    dispatch(getDrinkById(drinkId));
  }, [dispatch, drinkId]);

  // const drink = {
  //   _id: {
  //     $oid: '639b6de9ff77d221f190c563',
  //   },
  //   drink: 'Just a Moonmint',
  //   drinkAlternate: 'Sorry, not specified',
  //   tags: 'Sorry, not specified',
  //   video: 'Sorry, not specified',
  //   category: 'Shake',
  //   IBA: 'Sorry, not specified',
  //   alcoholic: 'Non alcoholic',
  //   glass: 'Highball Glass',
  //   description:
  //     'Just a Moonmint is a refreshing and minty cocktail that combines the flavors of vodka, lime juice, and mint syrup. It is made by shaking vodka, lime juice, mint syrup, and ice together and straining it into a glass. The result is a crisp and invigorating drink with a hint of sweetness from the mint syrup. Sip on this cocktail and let the coolness of the mint refresh your palate.',
  //   instructions:
  //     'Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.',
  //   instructionsES:
  //     'Coloque todos los ingredientes en el vaso de la licuadora, tape y mezcle a velocidad media hasta que estén bien mezclados. Vierta en un vaso alto, 2 medianos o 3 pequeños y beba.',
  //   instructionsDE:
  //     'Alle Zutaten in den Mixer geben - abdecken und bei mittlerer Geschwindigkeit schaumig schlagen, bis sie gut vermischt sind. In ein großes, 2 mittlere oder 3 kleine Gläser füllen und geniessen.',
  //   instructionsFR:
  //     "Placer tous les ingrédients dans le bol du mélangeur - couvrir et fouetter à vitesse moyenne jusqu'à ce que le tout soit bien mélangé. Verser dans un grand, 2 moyens ou 3 petits verres et boire.",
  //   instructionsIT:
  //     'Mettere tutti gli ingredienti nella caraffa del frullatore - coprire e montare a velocità media fino a quando non sono ben amalgamati.Versare in un bicchiere alto, 2 medi o 3 piccoli e bere.',
  //   instructionsRU:
  //     'Поместите все ингредиенты в чашу блендера, накройте крышкой и взбивайте на средней скорости, пока они хорошо не перемешаются. Налейте в один высокий, 2 средних или 3 маленьких стакана и выпейте.',
  //   instructionsPL:
  //     'Umieść wszystkie składniki w dzbanku blendera - przykryj i ubijaj na średnich obrotach, aż dobrze się połączą. Wlej jedną dużą, 2 średnie lub 3 małe szklanki i wypij.',
  //   instructionsUK:
  //     'Помістіть усі інгредієнти в ємність блендера, накрийте кришкою та збийте на середній швидкості, поки добре не змішаються. Налийте в одну високу, 2 середні або 3 маленькі склянки і випийте.',
  //   drinkThumb:
  //     'https://ftp.goit.study/img/drinkify/recipes/Just_a_Moonmint.jpg',
  //   ingredients: [
  //     {
  //       title: 'Milk',
  //       measure: '2 cups',
  //       ingredientId: {
  //         $oid: '64aebb7f82d96cc69e0eb4d5',
  //       },
  //     },
  //     {
  //       title: 'Chocolate syrup',
  //       ingredientId: {
  //         $oid: '64aebb7f82d96cc69e0eb4d7',
  //       },
  //     },
  //     {
  //       title: 'Mint syrup',
  //       ingredientId: {
  //         $oid: '64f1d5c269d8333cf130fb61',
  //       },
  //     },
  //   ],
  //   shortDescription:
  //     'A refreshing and minty cocktail with vodka, lime juice, and mint syrup.',
  // };

  return (
    <div style={{ background: '#0a0a11' }}>
      <Header />
      <Container>
        <DrinkPageHero cocktailData={drink} />
        {/* {console.log('drink: ', drink)} */}
        <DrinkIngredientsList cocktailData={drink.ingredients} />
        <RecipePreparation cocktailData={drink} />
      </Container>
      <Footer />
    </div>
  );
};

export default DrinkPage;
