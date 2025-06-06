const User = require('../models/User');

class UserService {
  // Validar dados do usuário
  static validateUserData(userData) {
    const { name, email, password } = userData;
    const errors = [];

    if (!name || name.trim().length < 2) {
      errors.push('Nome deve ter pelo menos 2 caracteres');
    }

    if (!email || !this.isValidEmail(email)) {
      errors.push('Email deve ter um formato válido');
    }

    if (!password || password.length < 6) {
      errors.push('Senha deve ter pelo menos 6 caracteres');
    }

    return errors;
  }

  // Validar formato de email
  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Criar usuário com validação
  static async createUser(userData) {
    const errors = this.validateUserData(userData);
    if (errors.length > 0) {
      throw new Error(errors.join(', '));
    }

    return await User.create(userData);
  }

  // Buscar usuário por email
  static async findUserByEmail(email) {
    const users = await User.findAll();
    return users.find(user => user.email === email);
  }

  // Verificar se email já existe
  static async emailExists(email) {
    const user = await this.findUserByEmail(email);
    return !!user;
  }

  // Obter estatísticas de usuários
  static async getUserStats() {
    const users = await User.findAll();
    return {
      total: users.length,
      recentUsers: users.slice(-5) // Últimos 5 usuários
    };
  }
}

module.exports = UserService;