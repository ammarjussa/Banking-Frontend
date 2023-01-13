import React, { useState } from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-18-pdf/renderer";

const BankStatement = ({ transactions }) => {
  const [balance, setBalance] = useState(0);

  const calculateBalance = () => {
    let total = 0;
    transactions.forEach((transaction) => {
      total += transaction.amount;
    });
    setBalance(total);
  };

  return (
    <PDFDownloadLink
      document={
        <BankStatementDocument transactions={transactions} balance={balance} />
      }
      fileName="bank_statement.pdf"
    >
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download Pdf"
      }
    </PDFDownloadLink>
  );
};

const BankStatementDocument = ({ transactions, balance }) => (
  <Page size="A4" style={styles.page}>
    <View style={styles.section}>
      <Text>Bank Statement</Text>
    </View>
    <View style={styles.section}>
      {transactions.map((transaction, i) => (
        <View key={i}>
          <Text>Transaction Date: {transaction.date}</Text>
          <Text>Transaction Amount: {transaction.amount}</Text>
        </View>
      ))}
    </View>
    <View style={styles.section}>
      <Text>Total Balance: {balance}</Text>
    </View>
  </Page>
);

const styles = {
  page: {
    padding: 30,
    fontFamily: "Helvetica",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
};

export default BankStatement;
