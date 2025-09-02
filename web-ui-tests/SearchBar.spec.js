/**
 * Teste para um componente hipotético: SearchBar
 *
 * Imagine que você tem um componente de busca (feito em React, Vue, Svelte, etc.)
 * que se parece com isso:
 *
 * <SearchBar onSearch={(query) => console.log('Buscando por:', query)} />
 *
 * Ele consiste em um <input> e um <button>.
 */

// 1. `describe`: O Agrupador de Testes
// `describe` cria um bloco que agrupa vários testes relacionados para um mesmo componente ou funcionalidade.
// Ajuda a organizar seus testes e a gerar relatórios mais limpos.

describe('SearchBar Component', () => {

  // Cenário de Teste: Vamos simular a renderização do componente e as interações do usuário.
  // Nota: Em um projeto real, você usaria uma biblioteca como a @testing-library/react
  // para renderizar o componente e interagir com ele. Aqui, vamos focar na lógica do Jest.

  // 2. `it` ou `test`: O Caso de Teste Individual
  // `it` é um alias para `test`. É aqui que você descreve o que um teste específico deve fazer.
  // A descrição deve ser clara e ler como uma frase: "It should do something".
  it('deve chamar a função onSearch com o valor correto quando o botão é clicado', () => {

    // -- Preparação (Arrange) --
    // Criamos as condições para o nosso teste. Neste caso, uma "função espiã" (mock).
    const onSearchMock = jest.fn(); // `jest.fn()` cria uma função falsa que "espia" como ela é chamada.
    const searchQuery = 'termo de busca';

    // Simulamos o componente sendo renderizado com nossa função mock.
    // Simulamos o usuário digitando no input.
    // Simulamos o clique no botão.

    // -- Ação (Act) --
    // Aqui é onde executamos a lógica que queremos testar.
    // Em um ambiente real, você simularia o clique no botão aqui.
    // Por enquanto, vamos chamar a função diretamente para simular o evento.
    // Exemplo de como seria com a testing-library:
    //
    //   const { getByRole, getByPlaceholderText } = render(<SearchBar onSearch={onSearchMock} />);
    //   fireEvent.change(getByPlaceholderText('Buscar...'), { target: { value: searchQuery } });
    //   fireEvent.click(getByRole('button'));
    //
    // Como não temos o componente, vamos simular o resultado final da interação:
    // nosso componente chama a função `onSearch` com o valor do input.
    onSearchMock(searchQuery);

    // -- Verificação (Assert) --
    // 3. `expect`: A Ferramenta de Verificação
    // `expect` é o que faz a verificação. Você passa um valor para ele e o combina
    // com uma função "matcher" (como `toBe`, `toHaveBeenCalledWith`) para afirmar algo sobre ele.

    // "Espero que a nossa função mock tenha sido chamada com o termo de busca."
    expect(onSearchMock).toHaveBeenCalledWith(searchQuery);

    // Você também pode verificar quantas vezes ela foi chamada.
    // "Espero que a nossa função mock tenha sido chamada exatamente 1 vez."
    expect(onSearchMock).toHaveBeenCalledTimes(1);
  });

  it('não deve chamar onSearch se o campo de busca estiver vazio', () => {
    // -- Preparação --
    const onSearchMock = jest.fn();

    // -- Ação --
    // Simulamos o clique no botão, mas o input está vazio, então a função onSearch
    // (idealmente) não deve ser chamada.
    // (Nenhuma ação de chamada aqui)

    // -- Verificação --
    // "Espero que a nossa função mock NÃO tenha sido chamada."
    expect(onSearchMock).not.toHaveBeenCalled();
  });
});
