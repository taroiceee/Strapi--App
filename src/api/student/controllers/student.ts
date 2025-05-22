// /**
//  * student controller
//  */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::student.student');



//  ---------------------以上为原生代码-------------------------------

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::student.student', ({ strapi }) => ({
  async customDelete(ctx) {
    try {
      const { id } = ctx.request.body;

      if (!id) {
        return ctx.badRequest('Missing student ID');
      }

      const deletedEntry = await strapi.entityService.delete('api::student.student', id);

      return ctx.send({ message: 'Student deleted', data: deletedEntry });
    } catch (error) {
      console.error('Delete error:', error);
      return ctx.internalServerError('Failed to delete student');
    }
  },

  async findOne(ctx) {
    const { id } = ctx.params;

    console.log("💡 findOne called with id:", id);

    const entity = await strapi.entityService.findOne('api::student.student', id, {
    });

    return ctx.send({ data: entity });
  },
  async customCreate(ctx) {
    const data = ctx.request.body;
    if (!data) {
      return ctx.badRequest('缺少数据');
    }

    const created = await strapi.entityService.create('api::student.student', { data });
    ctx.body = created;
  },
  async customUpdate(ctx) {
    const { id, data } = ctx.request.body;
  
    if (!id || !data) {
      return ctx.badRequest('缺少 id 或 data');
    }
  
    // 查一次旧数据，防止漏传 documentId 等唯一字段
    const existing = await strapi.entityService.findOne('api::student.student', id);
    if (!existing) {
      return ctx.notFound('学生不存在');
    }
  
    // 合并：保留旧字段，只覆盖你传的字段
    const mergedData = {
      ...existing,
      ...data
    };
  
    // 删除不能更新的系统字段
    delete mergedData.id;
    delete mergedData.createdAt;
    delete mergedData.updatedAt;
    delete mergedData.publishedAt;
  
    const updated = await strapi.entityService.update('api::student.student', id, {
      data: mergedData
    });
  
    ctx.body = {
      msg: '✅ customUpdate 成功',
      updated,
    };
  }
  
  
  
}));
