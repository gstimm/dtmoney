import { Container } from './styles';

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de WebSite</td>
            <td className="deposit">R$12000,00</td>
            <td>Job</td>
            <td>10/05/2021</td>
          </tr>
          <tr>
            <td>Fatura do Cartão</td>
            <td className="withdraw">-R$1600,00</td>
            <td>Contas</td>
            <td>10/05/2021</td>
          </tr>
          <tr>
            <td>Salário</td>
            <td className="deposit">R$3000,00</td>
            <td>Job</td>
            <td>11/05/2021</td>
          </tr>
          <tr>
            <td>Bicicleta</td>
            <td className="withdraw">-R$2000,00</td>
            <td>Esportes</td>
            <td>05/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}